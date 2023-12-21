package mythik.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import mythik.model.Creature;



public interface IDAOCreature extends JpaRepository<Creature,Integer> {

}
