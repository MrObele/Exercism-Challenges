class Prime

  def self.nth(args)
    raise ArgumentError.new if args < 1
     
    result = [2]    # The first prime number

    checker = 3

    while result.length < args do                              # This loop checks if the current nummber has a factor in the result array and 
      result << checker if result.all? {|x| checker % x != 0}  # pushes the number into the array if it doesn't
      checker += 1
    end 

    return result.last    
  end
end
