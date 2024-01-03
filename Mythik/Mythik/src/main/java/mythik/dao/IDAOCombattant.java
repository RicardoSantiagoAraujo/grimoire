package mythik.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import mythik.model.Combattant;



public interface IDAOCombattant extends JpaRepository<Combattant,Integer> {

	@Query("select c from Combattant c where c.compte.id = ?1")
	List<Combattant> findByCompte(Integer id);
	
}
