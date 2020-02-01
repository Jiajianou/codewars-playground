package javaman;

import java.util.Arrays;
import static java.util.Arrays.stream;


//Introduction and Warm-up (Highly recommended)
//Playing With Lists/Arrays Series
//Task
//Given an array/list [] of integers , Find the product of the k maximal numbers.
//
//Notes
//Array/list size is at least 3 .
//
//Array/list's numbers Will be mixture of positives , negatives and zeros
//
//Repetition of numbers in the array/list could occur.
//
//Input >> Output Examples
//maxProduct ({4, 3, 5}, 2) ==>  return (20)
//Explanation:
//Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
//maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
//Explanation:
//Since the size (k) equal 3 , then the subsequence of size 2 whose gives product of maxima is 8 * 9 * 10 = 720 .
//maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
//Explanation:
//Since the size (k) equal 5 , then the subsequence of size 2 whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600 .
//maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
//Explanation:
//Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is -4 * -1 = 4 .
//maxProduct ({10, 3, -1, -27} , 3)  return (-30)
//Explanation:
//Since the size (k) equal 3 , then the subsequence of size 2 whose gives product of maxima is 10 * 3 * -1 = -30 .
//Playing with Numbers Series
//Playing With Lists/Arrays Series
//For More Enjoyable Katas
//ALL translations are welcomed
//Enjoy Learning !!
//Zizou




public class ArrayKMaxProduct
{
    public static long maxProduct(int[] numbers, int sub_size)
    {
    	
    	
    	//does not return anything
    	
    	Arrays.sort(numbers);
    	
    	long product = 1;
    	
    	for(int i = numbers.length - 1 ; i >= numbers.length - sub_size; i--) {
    		
    		product *= numbers[i];
    		
    	}
    	
    	
    	
        return product; 
    }
    
    //cw's top solutions:
    public static long maxProduct2(int[] numbers, int subSize) {
        return stream(numbers)
            .sorted()
            .skip(numbers.length-subSize)
            .mapToLong(Long::valueOf)
            .reduce(1, (x,y)->x*y);
    }
    
    public static long maxProduct3(int[] numbers, int sub_size)
    {
        return Arrays
                .stream(numbers)
                .sorted()
                .skip(numbers.length - sub_size)
                .boxed()
                .mapToLong(Integer::longValue)
                .reduce((x, y) -> x * y)
                .orElseThrow(() -> new NumberFormatException());
    }
    
    public static long maxProduct4(int[] numbers, int sub_size)
    {
        return Arrays.stream(numbers)
          .asLongStream()
          .map(x -> -x)
          .sorted()
          .map(x -> -x)
          .limit(sub_size)
          .reduce(1, (a, b) -> a*b);
    }
}