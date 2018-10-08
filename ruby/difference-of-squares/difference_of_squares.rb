

class Squares
  def initialize user_input
    @user_input = user_input
  end

  def square_of_sum
    result = 0

    for i in 1..@user_input do
      result += i
    end
    result**2
  end

  def sum_of_squares
    result = 0
    for i in 1..@user_input do
      result += i**2
    end
    result
  end

  def difference
    square_of_sum - sum_of_squares
  end
end