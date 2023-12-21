package mythik.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import mythik.model.Combattant;



public interface IDAOCombattant extends JpaRepository<Combattant,Integer> {

}
