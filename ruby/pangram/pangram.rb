class Pangram
    def self.pangram?(sentence)
        non_letters = /[^a-zA-Z]/
        all_letters = "abcdefghijklmnopqrstuvwxyz"
        if(sentence == '')
            return false
        end
        if(sentence == sentence.downcase)
            for i in 0...all_letters.length do 
                if(!sentence.include?(all_letters[i])) 
                    return false
                end
            end
        else

        sentence.gsub!(non_letters,"").downcase!
        for i in 0...all_letters.length do 
            if(!sentence.include?(all_letters[i])) 
                return false
            end
        end
        return true
    end 
    end
end