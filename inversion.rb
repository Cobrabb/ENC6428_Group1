require 'net/http'
require 'json'
require 'csv'

num = 3;
word_to_filenum = Hash.new

#For each blake00X
num.times do |i|
    blakeFile = JSON.parse(File.open("blake00#{i+1}.js").read[11..-3])
    
    # For each line in the Blake File
    blakeFile.each do |line|
        
        splitline = line.split(/ /)
        # For each word in the Line
        splitline.each do |word|
            if word_to_filenum[word.upcase].nil?
                word_to_filenum[word.upcase] =  Array.new
            end
            found = false
            word_to_filenum[word.upcase].each do |filenum|
                if filenum == i
                    found = true
                    break
                end
            end

            if not found
                word_to_filenum[word.upcase] << i
            end

        end

    end

end

outFile = File.open("blakeinv.js", "w")
outFile.puts "BLAKEINV = #{word_to_filenum.to_json};"
outFile.close
