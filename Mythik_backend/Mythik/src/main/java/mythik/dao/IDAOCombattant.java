package mythik.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import mythik.model.Combattant;
import mythik.model.Compte;



public interface IDAOCombattant extends JpaRepository<Combattant,Integer> {

//	@Query("SELECT c FROM Combattant c WHERE c.compte = :compte")
//	List<Combattant> findByCompte(@Param("compte") Compte compte);
	
	List<Combattant> findByCompteId(@Param("id") Integer id);
}
