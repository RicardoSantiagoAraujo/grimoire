package mythik.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import mythik.model.Compte;



public interface IDAOCompte extends JpaRepository<Compte,Integer> {

}
