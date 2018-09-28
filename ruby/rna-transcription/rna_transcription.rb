

class Complement 
  def self.of_dna(dna)
    rna = ""
 

    for i in 0...dna.length do
      case dna[i]
        when "G" then rna += "C"
        when "C" then rna += "G"
        when "T" then rna += "A"
        when "A" then rna += "U"
      

      end

    end

     return rna

  end
end