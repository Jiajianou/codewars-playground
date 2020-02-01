package javaman;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

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
    	assertEquals(20, ArrayKMaxProduct.maxProduct(new int[]{4,3,5}, 2));
    }
}
