function scuberGreetingForFeet(rideDistance){
  if (rideDistance <=400){
    return "This one is on me!";

  } else if (rideDistance >= 2000 && rideDistance < 2400){
    return "I will gladly take your thirty bucks.";

  } else if (rideDistance >= 2500){
    return "No can do.";

  } else {
    return "I will gladly take your thirty bucks";
  }
}

function ternaryCheckCity(cityName){
  let message = (cityName == 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return message;
}


function switchOnCharmFromTip(tipAmount){
  let thankYouMessage;

  switch (tipAmount) {
    case "generous":
      thankYouMessage ="Thank you so much.";
      break;
    case "not as generous":
      thankYouMessage ="Thank you.";
      break;
    default:
      thankYouMessage ="Bye.";
  }
  return thankYouMessage;
}

// describe('switchOnCharmFromTip()', function () {
//   it('should return "Thank you so much." if the tip is generous', function () {
//     expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//   });

//   it('should return "Thank you." if the tip is not as generous', function () {
//     expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//   });
// witch (tipAmount) {
//   case "generous":
//     thankYouMessage ="Thank you so much.";
//     break;
//   case "not as generous":
//     thankYouMessage ="Thank you.";
//     break;
//   default:
//     thankYouMessage ="Bye.";
// }
// return thankYouMessage;


// const tipAmount = "tip is generous";
// let thankYouMessage;

// switch (tipAmount) {
//   case "tip is generous":
//     thankYouMessage ="Thank you so much.";
//     break;
//   case "tip is not as generous":
//     thankYouMessage ="Thank you.";
//     break;
//   default:
//     thankYouMessage ="Bye.";
// }
// return thankYouMessage;