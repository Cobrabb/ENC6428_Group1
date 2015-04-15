require 'net/http'
require 'json'
require 'csv'

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
blakeFile = File.open("PlainWilliamBlake.txt")
blakeFile = CSV.open("BlakeText3.txt")
wordList = blakeFile.read

wordList = wordList.split(/,|\s/)

toDelete = Array.new
# Delete any open quotes
wordList.each_with_index do |word, i|
    if not word[0].nil? and (word[0].ord == 8220 or word[0].ord == 8221)
        wordList[i] = word[1..-1]
        word = wordList[i]
    end
    if not word.nil? and not word[-1].nil? and (word[-1].ord == 8220 or word[-1].ord == 8221)
        wordList[i] = word[0..-2]
        word = wordList[i]
    end
end

# Delete any words that are blank or & or end with closed quotes (just random 't's, probably a MS word relic
wordList.each do |word|
    if word == "" or word.nil? or word == "&"
        toDelete << word
    end
end
toDelete.each do |word|
    wordList.delete word
end

#Downcase all words and get the unique set
wordList.each_with_index do |word, i|
    wordList[i] = word.downcase
end
wordList.uniq!

# Get all of the synonyms
wordStruct = Hash.new
wordList.each do |word|
    #wordStruct[word] = getSynonyms word
   
end

jsonOut = wordStruct.to_json
outFile = File.open("blakeSynonyms.txt", "w")
outFile.puts jsonOut
outFile.close

