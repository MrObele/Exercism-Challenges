

class Sieve
  
  def initialize limit
    @limit = limit
  end

  def primes
    result = []
  if @limit < 2
    result
  elsif @limit < 3
    result = [2]
    result
  elsif @limit > 2
    result = [2]
   for i in 3..@limit do      # initializes a loop ending at the limit given
    checker = 0                #this checker to determine if a number is prime or not
     for element in result do  # this loop tries to determine if the current number in the                               loop has a factor in the results array

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

end