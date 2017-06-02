public class SMM { 
	public static void main(String[] args) {
		int i;
		for (i = 0; i < input.length; i++)
			if (Help.smm(input[i]) != output[i])
				break;
		System.out.print((i == input.length) ? 1 : 0);
	}
	private static int[][] input = {{-9,-9,29,78,-83,41,-25,25},
{87,-93,-82,11,48,-44},
{29,-88,92,-62,3},
{85,-57,-85},
{-69,28,-17,20,5,22,-3,97,-44,-70,83,-71,67},
{74,-58,65,75},
{3,-37,15,-9,-72,-84,-59,94,10,-21,-79,24,54,-47,-86,-7,11,-74},
{26,23,-42,50,-33,-69},
{-65,-75,-30,55,3,59,84,34,-31,67,-42,-56,47,61,-27},
{4,-91,-12,7,-67,-59,-42,-4,-7,31,-79,-36,11,1,-4,-37,95,-99},
{2,72,7,-51,69,-11,45},
{-26,33,-12,-30,-42,57,-50,79,95,10,33,-43,-9},
{74,-44,3,13,-89,82,55,38,-31,-5,-58,-87},
{93,-42,34,6},
{33,0,-58,-99,25,81,-4,-84,57,89,35,24,-41,-82,-93,22,64},
{-86,-71,59,12,64,35,98,50,8,-66},
{32,-68,78,52,-78,-5,4},
{-96,-19},
{75,-7,99,9,33,17,7,-89,11,18,-52,83,58,20,-65,40,-5,-20},
{-58,-58,-87,-33,98,12,36,78,98,-79,-57,-4,28,18},
{42,-49,78},
{61,-74,-63},
{-31,-34,-60,-11,46,77,45,-94,-74,27,46,97,-80,59,-75,89},
{86},
{-5},
{80,40,39,67,90,0,54,91,-55,-18,-100,87},
{-80,-1,-87,-99,-39,-81,72,-26,30,35},
{67,74,31,-70,99,31,92,39,-10,32,20,-52,-73},
{-10},
{-60,-9,47,-45,-35,-99,-42,-92,-14,34,27,-66,-72,39,-7},
{-48,93,-43,-35,93,-53},
{-32,17,-79,-35,50,-68,78,92,37,-55},
{86,9,54,97,-74,98,-1,61,39,-100,-75,41,91},
{52,-92,-96,42,94,44,-38,22,22,12,79,7,-95,89,-37,1,64,-80},
{-42,-89},
{92,-56,-65,-89,95,-15,80,-93,-7,-60,57,-76,93,-70,-99,-57,-82,85,24,-4},
{53,-15,50,-41,59,-54,-95,-1,-78,-29,-12,-5,45,87},
{47,-17,20,-64,40,69},
{57},
{98,26,31,-66,71,0,-10,-31,-7,-91,-11,-44,83},
{59,-92,20,25,-89,6,-64,81,-69,93,69,-29,38,43,-51,96,22,17,-72,99},
{-88,-57,-56,43,-41,34,-77,56,-43,-65,28,17,67,14,48,89,47},
{-47,83,54},
{88,-36,-85,88,-65,70,12,-20,-95,0,-62,-11,-35,78,-90,60},
{-27,-41,-53,-81},
{-13,-8,66,92,-31},
{73,-81,-88,68,45,-14,-37,-74,-80,-26,8,-92},
{97,85,-65,40,95,-81,-43,-51,-57,64,56,30,-75,-72,-87,80,-49,-22,-4,-71},
{-16,-51,63,25,27,-7,61,64,-44,22,-92,52,59,-80,25},
{84,-5,79,2,43,-12,50,56,22,-8,39,-71,-93},
{-46},
{-42,11,2,34,60,-82,14,-87,-92,-97,7,-2,-97},
{97,-1},
{49,-97,25,-55,87,50},
{37,-58,61},
{-56,21,-1,-79},
{-93,90,25,-25,84,72,75,8},
{89,-61,-56,-1,68,-47,41,79,1,-18,-35,4,-96,-1,1,61,-96},
{8,-6,71,67,-44,-65,-89,-50,-74,-62},
{69,-67,80,2,51,-4,68,-71,-29,-25,55},
{40,-47,23,-47,10,69,-25},
{-29,-31,-32,-99,73,-10,-16,36,31,50,-49,-45,17,-6,-78,84,18,8,14,62},
{-91,-64,72,-80,-21,49,-80},
{40,22,76,-84,-71,-12,-20,-82,-42,-63,-89,-61,51,20},
{-71,73,1,-32,26,-33,-54},
{-49,-25,96,-29,-97,-58,41,79,6,-70,94,78,-91,-53,41,35,63,21,-73},
{26,42,-66,-4,40,22,17,18,7,42},
{-35,32,-7,-1,63,80,38,92,67,55,-13,-72,-62,-90,8,-44},
{30,-52,32,-81,3,27},
{-70,-7,-96,78,38,-68,-6,-56,-40,-38,27,-74,-99,63,67,-37,-50,-54},
{44,54,82,54,-57,-31,26},
{32,-26,70,46,-21,92,80,87,60,10,-53,17,-18,30,11,-11,-45,51,-63,0},
{-57,-78,27,-70,-57,-42,59,-4,84,10,50,8,-61,97,-46,-54,-21},
{-9,28,95},
{43,-57,91,62,98,-15,2,64},
{-94,-28,21,-54,89,71,57,-49,-68,-51},
{89,-5,47,51,67,94,49,24,76,93,79,-51,90},
{-89,-40,-15,12,-73,-62,40,-58,89,38,90,-77,-79,-47,-11,90,-8},
{-67,83,-38,82,45,69,-33},
{93,-70,72},
{66,-27},
{-93,49,58,88,93,99,-57,-57,-66,-89,72,-85,-7,-11,76,-2,4,-85},
{13,46,30,4,93,58,-26,-54},
{-42,13,53,-31,-85,68,-53,-97,54,46,-42,90,97,57,7,-13},
{-2,-42,-67,66,16,-37,80,87,35,-75,23,50,-24,84,66,16,13},
{62,-100,47,-69,47,-56,91,-45,-37,57,-58,66,5,-3,19,-89,28},
{-53,29,-75,71,-19,9},
{27,74,97,72,-95,-64,27,-20},
{-68,-33,18,-62,38,-100,84,41,-35,-56,44,68,-12,-85},
{-98},
{96,-16,60,-14,96,49,21,9,60,39,18,38,-85,79,-48,-35,45,-56},
{0,92,-65,-11,-20,33,-94,81},
{96,-54,42,22,9,-7,45,98,40,86},
{-23,-71,96,65,15,54,39,-25,86,-36},
{82,-38,-55,67,14,15,11,94,-50,-33,-72,-57,34,62,-73},
{-75,91,-77,37,-64,-21,-38,-75,72,-98,-73,-79,36,-6,-44,-67,39,-8},
{73,-88,37,81,31,-82,-16,71,-45,12,39,-22,89},
{95,-88,-60,-9},
{-20,12,14,20,47,68,16,52,-31,-10,-28},
{-78}};
	private static int[] output = {-5,-6,4,0,26,17,8,-19,9,-4,21,45,-7,51,-10,12,0,-115,10,11,29,-13,3,172,-10,-9,-27,26,-20,-52,40,13,-2,-2,-131,-4,-8,5,114,7,7,1,36,-7,-108,61,-19,10,-28,-9,-92,-37,96,-10,3,-58,-3,-7,-18,9,22,-15,-19,-13,2,-1,-24,2,-49,-21,25,29,19,86,41,-5,43,1,16,23,39,6,39,0,12,-9,-4,2,-16,-196,11,-2,44,25,21,-7,1,7,37,-156};
}