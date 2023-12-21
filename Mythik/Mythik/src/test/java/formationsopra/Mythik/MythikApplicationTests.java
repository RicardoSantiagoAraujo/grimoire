package formationsopra.Mythik;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import mythik.dao.IDAOCreature;

@SpringBootTest
class MythikApplicationTests {
	@Autowired
	private IDAOCreature daoCreature; 
	
	@Test
	void contextLoads() {
	}
	@Test
	void init() {
		System.out.println(daoCreature.findAll());
		
	}
}
