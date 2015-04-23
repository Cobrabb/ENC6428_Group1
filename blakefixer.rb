require 'net/http'
require 'json'
require 'csv'

# Get the word list
num = 6
blakeFile = File.open("blake00#{num}.txt")
lines = blakeFile.read
lines = lines.split(/,/)
lines[0] = " "+lines[0]
lines[-1] = lines[-1][0..-3]

lines.each_with_index do |line,i|
    line = line[2..-2]
    if line.nil?
        lines[i] = line
        next
    end
    line = line.gsub(",","").gsub("&","").gsub("-","").gsub("(","").gsub(")","").gsub("'", "")
    if line.nil?
        lines[i] = line
        next
    end
    line = line.gsub("  "," ")
    line.strip!
    lines[i] = line
end

outFile = File.open("blake00#{num}.js", "w")
outFile.puts "BLAKE00#{num} = #{lines.to_json};"
outFile.close
