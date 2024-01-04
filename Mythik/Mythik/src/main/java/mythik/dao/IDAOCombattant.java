package mythik.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import mythik.model.Combattant;
import mythik.model.Compte;



public interface IDAOCombattant extends JpaRepository<Combattant,Integer> {

	List<Combattant> findByCompte(Compte compte);
	
}
