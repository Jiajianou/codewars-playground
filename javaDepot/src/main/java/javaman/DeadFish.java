package javaman;

import org.apache.commons.lang3.ArrayUtils;

//Write a simple parser that will parse and run Deadfish.
//
//Deadfish has 4 commands, each 1 character long:
//
//i increments the value (initially 0)
//d decrements the value
//s squares the value
//o outputs the value into the return array
//Invalid characters should be ignored.
//
//Deadfish.parse("iiisdoso") =- new int[] {8, 64};




public class DeadFish {
	
	
    public static int[] parse(String data) {
    	
    	int[] outputArray = {};
    	
    	int val = 0;
    	
    	for(char ch : data.toCharArray()) {
    		
    		if(ch == 'i') {
    			val++;
    		}
    		
    		if(ch == 'd') {
    			val--;
    		}
    		
    		if(ch == 's') {
    			val=val*val;
    		}
    		
    		if(ch == 'o') {
    			outputArray = ArrayUtils.add(outputArray, val);
    		}
    				
    		
    	}
    	
    	return outputArray;
    	     
    }
    
    
    //cw's solutions:
    
    public static int[] parse2(String d) {
        int o[] = d.chars().toArray(), v = 0, p = 0, j;
        for (int i = 0; i < o.length; i++, p += j % 5 % 3)
          o[p] = v += (j = o[i]) % 4 % 3 - j % 16 % 3 + Math.pow(v, (j % 26 % 3)) - v;
        return java.util.Arrays.copyOf(o, p);
      }
    

}
