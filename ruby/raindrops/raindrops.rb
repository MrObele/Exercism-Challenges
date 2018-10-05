class Raindrops
    def self.convert(num)
        three = "Pling"
        five = "Plang"
        seven = "Plong"

        case num
        when (num%3 == 0 && num%5 == 0 && num%7 == 0) then return three+five+seven 
        when (num%3 == 0 && num%5 == 0) then return three+five 
        when (num%5 == 0 && num%7 == 0) then return five+seven 
        when (num%3 == 0 && num%7 == 0) then return three+seven 
        when (num%3 == 0) then return three
        when (num%5 == 0) then return five
        when (num%7 == 0) then return seven  
        else  
            return num.to_s        
        end
       
    end
end