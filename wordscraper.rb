require 'net/http'
require 'json'

def getSynonyms word
    puts "Getting synonym for #{word}"
    apiKey = "BJtqrTPzn9ODHp451Nb3"
    language = "en_US"
    endpoint = "http://thesaurus.altervista.org/thesaurus/v1"

    url = URI.parse("#{endpoint}?word=#{word}&language=#{language}&key=#{apiKey}&output=json")
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port) {|http|
      http.request(req)
    }

    json = res.body
    json = JSON.parse(json)

    if not json['error'].nil?
        return Array.new
    end

    synArray = Array.new
    response = json['response']

    response.each do |res|
        synlist = res['list']['synonyms'].split(/\|/)
        
        toDelete = Array.new
        synlist.each do |syn|
            if syn.include? ")" or syn =~ /[A-Z]/
                toDelete << syn
            end
        end
        toDelete.each do |syn|
            synlist.delete syn
        end

        synArray.concat synlist
    end


    return synArray
end

# Get the word list
blakeFile = File.open("rb_bl")
wordList = blakeFile.read
wordList = JSON.parse(wordList)

realList = Array.new
wordList.each do |word|
    words = word.split(/ /)
    words.each do |wordr|
        realList << wordr.downcase
    end
end

realList.uniq!

# Get all of the synonyms
structFile = File.open("blakeSynonyms2.txt")
wordStruct = JSON.parse(structFile.read)

realList.each do |word|
    if not wordStruct[word].nil?
        puts "Already had syn for #{word}"
    else
        wordStruct[word] = getSynonyms word
    end
end

jsonOut = wordStruct.to_json
outFile = File.open("blakeSynonyms3.txt", "w")
outFile.puts jsonOut
outFile.close

