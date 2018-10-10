class Prime

  def self.nth(args)
    if args < 1
      raise ArgumentError
    end

    for counter in 2...10000 do
      return self.primes(counter)[self.primes(counter).length - 1] if  self.primes(counter).length > args

    end 

  end


  ##

  def self.primes(limit)
    result = []
  if limit < 2
    result
  elsif limit < 3
    result = [2]
    result
  elsif limit > 2
    result = [2]
   for i in 3..limit do     
    checker = 0                
     for element in result do 

      if i % element == 0
       checker += 1
      end
     end
     if checker == 0
      result << i
     end
   end

  end
     result
  end


  ##

end


# class Prime
#   def initialize
#     self.primes = []
#   end
  
#   def self.nth(num)
#     max = 10000
#     for i in max
#       self.check(i)
#     end
#   end

#   def self.check(num)
#     for i in 2...num/2
#       if num % i == 0
#         return
#       else
#         self.primes.push(num)
#       end
#     end
#   end
# end