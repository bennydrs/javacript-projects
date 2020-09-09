const quizData = [
  {
    question: 'Apa ibu kota Jawa Barat?',
    a: 'Bandung',
    b: 'Cirebon',
    c: 'Purwakarta',
    d: 'Bogor',
    correct: 'a'
  },
  {
    question: 'Berapa jumlah provinsi di Indonesia?',
    a: '31',
    b: '32',
    c: '33',
    d: '34',
    correct: 'd'
  },
  {
    question: 'Danau yang terbesar di Indonesia?',
    a: 'Danau Singkarak',
    b: 'Danau Toba',
    c: 'Danau Maninjau',
    d: 'Danau Telaga Warna',
    correct: 'b'
  },
  {
    question: 'Kota yang dijuluki kota patriot?',
    a: 'Bogor',
    b: 'Depok',
    c: 'Bekasi',
    d: 'Surabaya',
    correct: 'c'
  },
  {
    question: 'Gunung tertinggi di Pulau Jawa?',
    a: 'Gunung Slamet',
    b: 'Gunung Semeru',
    c: 'Gunung Sumbing',
    d: 'Gunung Arjuno',
    correct: 'b'
  },
];

const questionEl = document.getElementById('question')
const quiz = document.getElementById('quiz')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const answerEls = document.querySelectorAll('.answer')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function getSelected() {
  let answer = undefined

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  });

  return answer
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // check answer
  const answer = getSelected()

  if (answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `<h2 class="result">Nilai kamu ${score}/${quizData.length} pertanyaan</h2> <button onclick="location.reload()">Ulangi</button>`
    }
  }
})