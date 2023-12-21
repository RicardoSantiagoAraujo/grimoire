package mythik.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import mythik.model.Combat;



public interface IDAOCombat extends JpaRepository<Combat,Integer> {

}
