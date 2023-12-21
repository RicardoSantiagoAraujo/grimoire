package mythik;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import mythik.dao.IDAOCreature;

@SpringBootApplication
public class MythikApplication {


	public static void main(String[] args) {
		SpringApplication.run(MythikApplication.class, args);
		
	}

}
