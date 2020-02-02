package javaman;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void meetExpectations()
    {
    	assertEquals(1,1);
    	
    	
    }
    
    @Test 
    public void maxKArray() {
    	
    	assertEquals(720, ArrayKMaxProduct.maxProduct(new int[]{10,8,7,9}, 3));
    }
    
    @Test
    public void deadFishEquals() {
    	
    	assertArrayEquals(new int[] {8, 64, 3600}, DeadFish.parse("iiisdosodddddiso"));
    }
}
