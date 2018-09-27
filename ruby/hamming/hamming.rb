class Hamming
  def self.compute(strandA, strandB)
   counter = 0

   if strandA.length != strandB.length
    raise ArgumentError  
    
   end

  for i in 0..strandA.length do 
    if strandA[i] != strandB[i]
      counter += 1
    end
  end
  return counter
  end
end