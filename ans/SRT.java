public class SRT { 
	public static void main(String[] args) {
		Help help = new Help();
		int i;
		for (i = 0; i < input.length; i++)
			if (!cmp(help.srt(input[i]), output[i]))
				break;
		System.out.print((i == input.length) ? 1 : 0);
	}

	private static boolean cmp(int[] a1, int[] a2) {
		if (a1.length != a2.length) return false;
		for (int i = 0; i < a1.length; i++)
			if (a1[i] != a2[i]) return false;
		return true;
	}
private static int[][] input = {{-78,-4,38,-90,-54,0,45,47,24,52,23,-70,-87,9,91,-34},
{77,-33,-93,-48,47,-83,64,-21},
{-20,-31,-55,78,-2,15,19,-14,-75,-52,92,80,3,7,74},
{64,61,-97,64,52,10,59,-83,12,-91,59,-38,-30},
{58,-74,-13,-32,52,33,-64,-94,-13,-78},
{36,-93,19,-37,-73,34,-100},
{-52,-5,-16,-80,68,93,-89,-29,84,-50,-5,20,-55},
{-6,32,91,-22,48,-12,-88,-48,-76,61,67,94,-81,-65},
{65,83,70,96,66,38,53,5,9,-11,55,97,93,-34,52,-30,45},
{56,-10,-94,62,-42,-60,-29,66,95,11,26,40,98,1,69,-47,34},
{-50},
{-28,86,97,-33,-99,-99,-93,-44,-38,77,-26,81,29,-34,66,-25,65,92,91},
{40,37,-83,-72,-100,25},
{-69,-47,89,22,40,78,77},
{-49,-97,82,-40,69,87,43,1,77,86,42,-57,-86,79,-17,71,-34,-98,-99,49},
{8,-33,21,24,9,10,43,-74,10,-8},
{-14,-25},
{16,36,-21,73,-69,88,-89,79,-62,-41,-84,-79,-52,88,-91,-33,44},
{-85,85,31,9,-55,-25},
{60,67,84,82,-44,-28,-19,-66,69,31,-89,5,-11,-33},
{83,-95,70,-78},
{81,-38,87,-12,95,-13,-3,-52,73,-82,49,24,26,66,-100,-91},
{-34,-63,20,-28},
{-2,-44,-48,-16,97,-4},
{-88,-16,89,37,-68,-68,2,23,-33,69,-38,-98,9,92,27,-78,60,-28,43},
{-41,2,21,96,-77,81,-84,-41,84},
{98,39,18},
{24,3,-2,-33,72,34,-73,46,31,17,-18,48},
{57,-100,-32,-15,16,61,-1,-25,-59,-96,73,-36,-34,-28,-32,71,27,-33,-17},
{63,51,80,-84,-48,68,-63,60,-41,89,87,-54,91,52,86,86,62,-97,-48},
{20,-65},
{-62,-88,-34,-33,-32,7,-23},
{-39,57,-65,62,-89,3,-28,-46,-67},
{-67,-2,9,31},
{-97,-10,60,-85,0,1,-40,-23,-15,86,-15,78,27,-23,49,-6},
{73,-39,-58,-65,66,-47,-93,89,-12,88,-30,26,-93,76,51,74},
{34,40,-58},
{60,40,2,-29,-64},
{-97,33,3,31,-60},
{-90,-39,-72,45,87,-26,-43,-48,64,72,-37,-62,-91,-77,72,48,-52,-92,45,40},
{-34,-9,28,36,32,-90,74,21,-42,53,-92,72,69,-93,42,40,-89,72,-80,-29},
{93,-40,40,-66},
{33,7,58,94,59,-14,55,-57,-32,94},
{97,-43,-79,-57,86,42,-23,-20,54,-96,78,-52,-10},
{30,-76,-21,-82,5,-22,3,-81,7},
{99,13,79,-62,23,32,-82,-44,52,16,15},
{92,-78,88,-60},
{-97,33,-99,86,-96,64,8,-95,40,4},
{24},
{-65,-44,45,-56,-71,-92,-22,95,27,-91},
{76,-33,16,8,-9,28,72,-25},
{79,-68,-5,61,30,93,-34},
{-1,57,94,-41,21,-3,99,-25,92,94,-2,23,13,16,-5,-87,-80},
{22,82,56,-32,94,-68,-32,-56},
{14,10,40,10,-74,54,-68,-41,80,34,97,59,8,-15,88,27,80,-41,83,-72},
{62,-51,-3,29,-9,-58,-25},
{-92},
{27,-63,48,-77,30,-95,-66,2,-80,72,37,-16,59,72},
{24,-79,-25,92,77,99,85,43,-67,-55},
{-11,-80,-97,-10,99},
{-87,-94,38,-65,1,-4,-54,48,-71,-32,-17,68},
{-75,21,-97},
{-24,-94,59,8,-26,49,92,-53,-88,-35,-14,-5,-46,-91,-83,-41},
{61,-52,-27,-44,31,-78,-62,69,-32,7,-26,97},
{-31},
{59,-83,-36,43,19,-83,-36,-76,-4,70},
{32,75,-91,46,-50,-22,-27,-80,15},
{-86,-40,95,-67,-69,-68,71,-4,82},
{-19,-86,81,36},
{14,-97,-100,63,20,18,-60,-64,70,-47,2,-12,-73,45,-47},
{63,90,46,-8,22,3,-86,-71,47,56},
{-82,4,53,-88,-68,-76,-94,-53,86,51,57,0,-98,77,-89,-8,76,-78},
{0,44,-62,75,-71,-39,-11,-92,88,65,-98,-1,-93,-34,62},
{-47},
{88,-69,-7,-28,-86,-2},
{-30,70,49,-23},
{66,-19,26,12,-40},
{-17,22,24,12,18,2,78,-68,34,4,53,71,28,6,88,13,-45,-70,-38,90},
{59,-63,60,78,-48,85,87},
{40,-31,37,24,79,45,25,-76,-76,63,-9,-84},
{-24,-7,-53,18,57},
{13,22,89,-59,-33,41,1,-53,26},
{-38,61,20,-63,29,30,-26,-32,-60,-49},
{-24,62,-70,-26,77},
{-46,-57},
{37,86,-91,32,2},
{25,75,-3,-46,61,-70,18,-49,89,22,17,-98,-26,-46,63,86,76,20,-7,77},
{-94,-39},
{9,37,-5,54,76,-8,-67,72,-70,-23},
{-54,90,-41,34,95,5,15,55,69,-49,78,-31,70,-90,38,-58,-57,83,-18,-65},
{73},
{84,22,36,-49,11,8,-7,57},
{43,83,-43,40,-93,-98,-20},
{77,28,-46,14,-12,84,-16,55,76,-62,27},
{-18,40,-4,-51,97,31,0,80,15,93,-9,-85,98},
{-14,-61,-84},
{-88,-20,-1},
{14,-6,-82,-60,90,92,-31,81,90,25},
{68,-37,94,-23,-80},
{-40,-58,-37,-48}};
private static int[][] output = {{-90,-87,-78,-70,-54,-34,-4,0,9,23,24,38,45,47,52,91},
{-93,-83,-48,-33,-21,47,64,77},
{-75,-55,-52,-31,-20,-14,-2,3,7,15,19,74,78,80,92},
{-97,-91,-83,-38,-30,10,12,52,59,59,61,64,64},
{-94,-78,-74,-64,-32,-13,-13,33,52,58},
{-100,-93,-73,-37,19,34,36},
{-89,-80,-55,-52,-50,-29,-16,-5,-5,20,68,84,93},
{-88,-81,-76,-65,-48,-22,-12,-6,32,48,61,67,91,94},
{-34,-30,-11,5,9,38,45,52,53,55,65,66,70,83,93,96,97},
{-94,-60,-47,-42,-29,-10,1,11,26,34,40,56,62,66,69,95,98},
{-50},
{-99,-99,-93,-44,-38,-34,-33,-28,-26,-25,29,65,66,77,81,86,91,92,97},
{-100,-83,-72,25,37,40},
{-69,-47,22,40,77,78,89},
{-99,-98,-97,-86,-57,-49,-40,-34,-17,1,42,43,49,69,71,77,79,82,86,87},
{-74,-33,-8,8,9,10,10,21,24,43},
{-25,-14},
{-91,-89,-84,-79,-69,-62,-52,-41,-33,-21,16,36,44,73,79,88,88},
{-85,-55,-25,9,31,85},
{-89,-66,-44,-33,-28,-19,-11,5,31,60,67,69,82,84},
{-95,-78,70,83},
{-100,-91,-82,-52,-38,-13,-12,-3,24,26,49,66,73,81,87,95},
{-63,-34,-28,20},
{-48,-44,-16,-4,-2,97},
{-98,-88,-78,-68,-68,-38,-33,-28,-16,2,9,23,27,37,43,60,69,89,92},
{-84,-77,-41,-41,2,21,81,84,96},
{18,39,98},
{-73,-33,-18,-2,3,17,24,31,34,46,48,72},
{-100,-96,-59,-36,-34,-33,-32,-32,-28,-25,-17,-15,-1,16,27,57,61,71,73},
{-97,-84,-63,-54,-48,-48,-41,51,52,60,62,63,68,80,86,86,87,89,91},
{-65,20},
{-88,-62,-34,-33,-32,-23,7},
{-89,-67,-65,-46,-39,-28,3,57,62},
{-67,-2,9,31},
{-97,-85,-40,-23,-23,-15,-15,-10,-6,0,1,27,49,60,78,86},
{-93,-93,-65,-58,-47,-39,-30,-12,26,51,66,73,74,76,88,89},
{-58,34,40},
{-64,-29,2,40,60},
{-97,-60,3,31,33},
{-92,-91,-90,-77,-72,-62,-52,-48,-43,-39,-37,-26,40,45,45,48,64,72,72,87},
{-93,-92,-90,-89,-80,-42,-34,-29,-9,21,28,32,36,40,42,53,69,72,72,74},
{-66,-40,40,93},
{-57,-32,-14,7,33,55,58,59,94,94},
{-96,-79,-57,-52,-43,-23,-20,-10,42,54,78,86,97},
{-82,-81,-76,-22,-21,3,5,7,30},
{-82,-62,-44,13,15,16,23,32,52,79,99},
{-78,-60,88,92},
{-99,-97,-96,-95,4,8,33,40,64,86},
{24},
{-92,-91,-71,-65,-56,-44,-22,27,45,95},
{-33,-25,-9,8,16,28,72,76},
{-68,-34,-5,30,61,79,93},
{-87,-80,-41,-25,-5,-3,-2,-1,13,16,21,23,57,92,94,94,99},
{-68,-56,-32,-32,22,56,82,94},
{-74,-72,-68,-41,-41,-15,8,10,10,14,27,34,40,54,59,80,80,83,88,97},
{-58,-51,-25,-9,-3,29,62},
{-92},
{-95,-80,-77,-66,-63,-16,2,27,30,37,48,59,72,72},
{-79,-67,-55,-25,24,43,77,85,92,99},
{-97,-80,-11,-10,99},
{-94,-87,-71,-65,-54,-32,-17,-4,1,38,48,68},
{-97,-75,21},
{-94,-91,-88,-83,-53,-46,-41,-35,-26,-24,-14,-5,8,49,59,92},
{-78,-62,-52,-44,-32,-27,-26,7,31,61,69,97},
{-31},
{-83,-83,-76,-36,-36,-4,19,43,59,70},
{-91,-80,-50,-27,-22,15,32,46,75},
{-86,-69,-68,-67,-40,-4,71,82,95},
{-86,-19,36,81},
{-100,-97,-73,-64,-60,-47,-47,-12,2,14,18,20,45,63,70},
{-86,-71,-8,3,22,46,47,56,63,90},
{-98,-94,-89,-88,-82,-78,-76,-68,-53,-8,0,4,51,53,57,76,77,86},
{-98,-93,-92,-71,-62,-39,-34,-11,-1,0,44,62,65,75,88},
{-47},
{-86,-69,-28,-7,-2,88},
{-30,-23,49,70},
{-40,-19,12,26,66},
{-70,-68,-45,-38,-17,2,4,6,12,13,18,22,24,28,34,53,71,78,88,90},
{-63,-48,59,60,78,85,87},
{-84,-76,-76,-31,-9,24,25,37,40,45,63,79},
{-53,-24,-7,18,57},
{-59,-53,-33,1,13,22,26,41,89},
{-63,-60,-49,-38,-32,-26,20,29,30,61},
{-70,-26,-24,62,77},
{-57,-46},
{-91,2,32,37,86},
{-98,-70,-49,-46,-46,-26,-7,-3,17,18,20,22,25,61,63,75,76,77,86,89},
{-94,-39},
{-70,-67,-23,-8,-5,9,37,54,72,76},
{-90,-65,-58,-57,-54,-49,-41,-31,-18,5,15,34,38,55,69,70,78,83,90,95},
{73},
{-49,-7,8,11,22,36,57,84},
{-98,-93,-43,-20,40,43,83},
{-62,-46,-16,-12,14,27,28,55,76,77,84},
{-85,-51,-18,-9,-4,0,15,31,40,80,93,97,98},
{-84,-61,-14},
{-88,-20,-1},
{-82,-60,-31,-6,14,25,81,90,90,92},
{-80,-37,-23,68,94},
{-58,-48,-40,-37}};
}
