

#number of questions
# questions
# answers
# then clear the screen anbegin the quiz
# do these as dictionaries
#

#ask how many questions
#numOfQuestions = get.chomp.to_i

#build the questions and answers using key value pairs
#
#

def buildQuestions(thing)
  puts "What is your question?"
  question = gets.chomp
  puts "What is the answer?"
  answer = gets.chomp
  puts "What is a wrong answer?"
  wrongAnswer = gets.chomp

  thing = {1 => question, 2 => answer, 3 => wrongAnswer}

end

puts "How many questions do you have?"
qAmount = gets.chomp.to_i
counter = 0

until counter == qAmount do
  thing = buildQuestions({})
  counter += 1
end



puts thing




