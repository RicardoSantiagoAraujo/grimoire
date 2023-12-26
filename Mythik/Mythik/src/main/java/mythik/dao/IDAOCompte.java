package mythik.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import mythik.model.Compte;




public interface IDAOCompte extends JpaRepository<Compte,Integer> {

	@Query("select c from Compte c where c.login = ?1 and c.password = ?2 ")
	Optional<Compte> findByLoginAndPassword(String login, String password);
}
