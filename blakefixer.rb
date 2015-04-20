require 'net/http'
require 'json'
require 'csv'

# Get the word list
blakeFile = File.open("BlakeText3.txt")
lines = blakeFile.read
lines = lines.split(/"/)

toDelete = Array.new
lines.each do |line|
    if line.nil? or line == "" or line == " " or line == ", " or line == "t" or line == "t "
        toDelete << line
    end
end

lines.each_with_index do |word,i|
    word = word.gsub(",","").gsub("&","").gsub("-","").gsub("(","").gsub(")","").gsub("'", "")
    word = word.gsub("  "," ").strip!
    lines[i] = word
end

lines.each do |line|
    if line.nil? or line == "" 
        toDelete << line
    end
end

toDelete.each do |line|
    lines.delete line
end

outFile = File.open("blake002.js", "w")
outFile.puts "BLAKE002 = #{lines.to_json};"
outFile.close
