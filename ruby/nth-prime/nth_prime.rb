class Prime

  def self.nth(args)
    if args < 1
      raise ArgumentError
    end
    if args == 1
      return 2
    end
    result = [2]
    while result.length <= args do
      for i in 3...10000 do
        counter = 0
        for j in 2...i
          if i%j== 0
            counter+= 1
          end
          if counter == 0
            result << i
          end 
    
        end
      end
    end
    result.length
  end
end

 