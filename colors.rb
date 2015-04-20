def convert_base str, from, to
    str.to_i(from).to_s(to).to_i
end


strings = ["092644", "798D48", "75341E", "DD9D1F", "F3C82B", "D9A37D", "361F25", "B15804", "CEBE33", "E86050", "7189B7", "F7EE85", "AE8BA9", "AC9C4F", "CFD7A4", "CABB46", "9F2F23", "C4D4D4", "616835", "9F8F80" ,"501505", "4F6C68", "C7916B", "D0A242", "EDDBC5","C2CDD3"]

strings.each do |string|
    p1 = string[0..1]
    p2 = string[2..3]
    p3 = string[4..5]
    puts (convert_base(p1, 16,10)/255.0).to_s + "," + (convert_base(p2,16,10)/255.0).to_s + "," + (convert_base(p3,16,10)/255.0).to_s
end

