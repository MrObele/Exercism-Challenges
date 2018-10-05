class Raindrops
    def self.convert(num)
      
        
        return "PlingPlangPlong" if (num%3 == 0 && num%5 == 0 && num%7 == 0) 
         
        return "PlingPlang" if (num%3 == 0 && num%5 == 0)
             
        return "PlangPlong" if (num%5 == 0 && num%7 == 0) 
            
        return "PlingPlong" if (num%3 == 0 && num%7 == 0)
            
        return "Pling" if (num%3 == 0) 
            
        return "Plang" if (num%5 == 0) 
             
        return "Plong"  if (num%7 == 0) 
          
        return num.to_s        
    
    end
end