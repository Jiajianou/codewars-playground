// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


import org.junit.Test;
import static org.junit.Assert.assertEquals;


public class Kata
 {
  public static int squareSum(int[] n)
  { 
   //Your Code
  }
 }





public class Tests
{
  @Test
  public void testBasic()
  {
   assertEquals(9, Kata.squareSum(new int[] {1,2,2}));
   assertEquals(5, Kata.squareSum(new int[] {1,2}));
   assertEquals(50, Kata.squareSum(new int[] {5,-3,4}));
  }
}