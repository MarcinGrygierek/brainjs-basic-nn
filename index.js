const brain = require('brain.js');

const config = {
  hiddenLayers: [25]
};

const net = new brain.NeuralNetwork(config)

const scaleQuarter = (val) => val / 1000;
const scale = (val) => val / 10000;
const reverse = (val) => val * 10000;

function shuffle(array) {
  // return array;
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


const data = [
  {
    input: [scaleQuarter(1)],
    output: [scale(67.30)]
  },
  {
    input: [scaleQuarter(2)],
    output: [scale(121.40)]
  },
  {
    input: [scaleQuarter(3)],
    output: [scale(160)]
  },
  {
    input: [scaleQuarter(4)],
    output: [scale(212)]
  },
  {
    input: [scaleQuarter(5)],
    output: [scale(246.5)]
  },
  {
    input: [scaleQuarter(6)],
    output: [scale(300)]
  },
  {
    input: [scaleQuarter(7)],
    output: [scale(354)]
  },
  {
    input: [scaleQuarter(8)],
    output: [scale(405)]
  },
  {
    input: [scaleQuarter(9)],
    output: [scale(498.5)]
  },
  {
    input: [scaleQuarter(10)],
    output: [scale(496)]
  },
  {
    input: [scaleQuarter(11)],
    output: [scale(530)]
  },
  {
    input: [scaleQuarter(12)],
    output: [scale(587)]
  },
  {
    input: [scaleQuarter(13)],
    output: [scale(635)]
  },
  {
    input: [scaleQuarter(14)],
    output: [scale(676)]
  },
  {
    input: [scaleQuarter(15)],
    output: [scale(730)]
  },
  {
    input: [scaleQuarter(16)],
    output: [scale(750)]
  },
  {
    input: [scaleQuarter(17)],
    output: [scale(750)]
  },
  {
    input: [scaleQuarter(18)],
    output: [scale(790)]
  },
  {
    input: [scaleQuarter(19)],
    output: [scale(810)]
  },
  {
    input: [scaleQuarter(20)],
    output: [scale(830)]
  },
  {
    input: [scaleQuarter(21)],
    output: [scale(860)]
  },
  {
    input: [scaleQuarter(22)],
    output: [scale(890)]
  },
  {
    input: [scaleQuarter(23)],
    output: [scale(920)]
  },
  {
    input: [scaleQuarter(24)],
    output: [scale(920)]
  },
  {
    input: [scaleQuarter(25)],
    output: [scale(1000)]
  },
  {
    input: [scaleQuarter(26)],
    output: [scale(1010)]
  },
  {
    input: [scaleQuarter(27)],
    output: [scale(1170)]
  },
  {
    input: [scaleQuarter(28)],
    output: [scale(1170)]
  },
  {
    input: [scaleQuarter(29)],
    output: [scale(1300)]
  },
  {
    input: [scaleQuarter(30)],
    output: [scale(1440)]
  },
  {
    input: [scaleQuarter(31)],
    output: [scale(1450)]
  },
  {
    input: [scaleQuarter(32)],
    output: [scale(1590)]
  },
  {
    input: [scaleQuarter(33)],
    output: [scale(1660)]
  },
  {
    input: [scaleQuarter(34)],
    output: [scale(1780)]
  },
  {
    input: [scaleQuarter(35)],
    output: [scale(1900)]
  },
  {
    input: [scaleQuarter(36)],
    output: [scale(1930)]
  },
  {
    input: [scaleQuarter(37)],
    output: [scale(1960)]
  },
  {
    input: [scaleQuarter(38)],
    output: [scale(2150)]
  },
  {
    input: [scaleQuarter(39)],
    output: [scale(2200)]
  },
  {
    input: [scaleQuarter(40)],
    output: [scale(2200)]
  },
  {
    input: [scaleQuarter(41)],
    output: [scale(2245)]
  },
  {
    input: [scaleQuarter(42)],
    output: [scale(2280)]
  },
  {
    input: [scaleQuarter(43)],
    output: [scale(2300)]
  },
  {
    input: [scaleQuarter(44)],
    output: [scale(2300)]
  },
  {
    input: [scaleQuarter(45)],
    output: [scale(2350)]
  },
  {
    input: [scaleQuarter(46)],
    output: [scale(2490)]
  },
  {
    input: [scaleQuarter(47)],
    output: [scale(2700)]
  },
  {
    input: [scaleQuarter(48)],
    output: [scale(2500)]
  },
  {
    input: [scaleQuarter(49)],
    output: [scale(2400)]
  },
  {
    input: [scaleQuarter(50)],
    output: [scale(2400)]
  },
  {
    input: [scaleQuarter(51)],
    output: [scale(2484)]
  },
  {
    input: [scaleQuarter(52)],
    output: [scale(2330)]
  },
  {
    input: [scaleQuarter(53)],
    output: [scale(2071)]
  },
  {
    input: [scaleQuarter(54)],
    output: [scale(2332)]
  },
  {
    input: [scaleQuarter(55)],
    output: [scale(2117)]
  },
  {
    input: [scaleQuarter(56)],
    output: [scale(2432)]
  },
  {
    input: [scaleQuarter(57)],
    output: [scale(2412)]
  },
  {
    input: [scaleQuarter(58)],
    output: [scale(2562)]
  },
  {
    input: [scaleQuarter(59)],
    output: [scale(2386)]
  },
  {
    input: [scaleQuarter(60)],
    output: [scale(2195)]
  },
  {
    input: [scaleQuarter(61)],
    output: [scale(2505)]
  },
  {
    input: [scaleQuarter(62)],
    output: [scale(2336)]
  },
  {
    input: [scaleQuarter(63)],
    output: [scale(2528)]
  },
  {
    input: [scaleQuarter(64)],
    output: [scale(2388)]
  },
  {
    input: [scaleQuarter(65)],
    output: [scale(2560)]
  },
  {
    input: [scaleQuarter(66)],
    output: [scale(2445)]
  },
  {
    input: [scaleQuarter(67)],
    output: [scale(2557)]
  },
  {
    input: [scaleQuarter(68)],
    output: [scale(2619)]
  },
  {
    input: [scaleQuarter(69)],
    output: [scale(2683)]
  },
  {
    input: [scaleQuarter(70)],
    output: [scale(2650)]
  },
  {
    input: [scaleQuarter(71)],
    output: [scale(3041)]
  },
  {
    input: [scaleQuarter(72)],
    output: [scale(2890)]
  },
  {
    input: [scaleQuarter(73)],
    output: [scale(2970)]
  },
  {
    input: [scaleQuarter(74)],
    output: [scale(3186)]
  },
  {
    input: [scaleQuarter(75)],
    output: [scale(3478)]
  },
  {
    input: [scaleQuarter(76)],
    output: [scale(3631)]
  },
  {
    input: [scaleQuarter(77)],
    output: [scale(3895)]
  },
  {
    input: [scaleQuarter(78)],
    output: [scale(3924)]
  },
  {
    input: [scaleQuarter(79)],
    output: [scale(3783)]
  },
  {
    input: [scaleQuarter(80)],
    output: [scale(3964)]
  },
  {
    input: [scaleQuarter(81)],
    output: [scale(4372)]
  },
  {
    input: [scaleQuarter(82)],
    output: [scale(4433)]
  },
  {
    input: [scaleQuarter(83)],
    output: [scale(4657)]
  },
  {
    input: [scaleQuarter(84)],
    output: [scale(3979)]
  },
  {
    input: [scaleQuarter(85)],
    output: [scale(3797)]
  },
  {
    input: [scaleQuarter(86)],
    output: [scale(3819)]
  },
  {
    input: [scaleQuarter(87)],
    output: [scale(3988)]
  },
  {
    input: [scaleQuarter(88)],
    output: [scale(3829)]
  },
  {
    input: [scaleQuarter(89)],
    output: [scale(4130)]
  },
  {
    input: [scaleQuarter(90)],
    output: [scale(4103)]
  },
  {
    input: [scaleQuarter(91)],
    output: [scale(3915)]
  },
  {
    input: [scaleQuarter(92)],
    output: [scale(3837)]
  },
  {
    input: [scaleQuarter(93)],
    output: [scale(4019)]
  },
  {
    input: [scaleQuarter(94)],
    output: [scale(3879)]
  },
  {
    input: [scaleQuarter(95)],
    output: [scale(3975)]
  },
  {
    input: [scaleQuarter(96)],
    output: [scale(4228)]
  },
  {
    input: [scaleQuarter(97)],
    output: [scale(4129)]
  },
  {
    input: [scaleQuarter(98)],
    output: [scale(4141)]
  },
  {
    input: [scaleQuarter(99)],
    output: [scale(3880)]
  },
  {
    input: [scaleQuarter(100)],
    output: [scale(3984)]
  },
  {
    input: [scaleQuarter(101)],
    output: [scale(3926)]
  },
  {
    input: [scaleQuarter(102)],
    output: [scale(4066)]
  },
  {
    input: [scaleQuarter(103)],
    output: [scale(3961)],
  },
  {
    input: [scaleQuarter(104)],
    output: [scale(3925)],
  },
  {
    input: [scaleQuarter(105)],
    output: [scale(4177)],
  },
  {
    input: [scaleQuarter(106)],
    output: [scale(4063)],
  }
]

const trainingSet = shuffle(data.filter((_, index) => index % 2 === 0));

net.train(trainingSet, { errorThresh: 0.000000001 });

for (let i = 1; i <= 200; i++) {
  console.log(reverse(net.run([scaleQuarter(i)])).toFixed(2).replace('.', ','));
}
