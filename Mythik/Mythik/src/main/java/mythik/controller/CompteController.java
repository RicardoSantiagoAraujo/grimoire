package mythik.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mythik.dao.IDAOCompte;
import mythik.model.Compte;
import mythik.model.Humain;

@RestController
@RequestMapping("/api/compte")
@CrossOrigin("*")
public class CompteController {

	@Autowired
	IDAOCompte daoCompte; 

	@GetMapping("/{id}")
	@CrossOrigin("*")
	public Compte findById(@PathVariable Integer id) 
	{
		Optional<Compte> opt = daoCompte.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		return opt.get();
	}
	
	@GetMapping
	public List<Compte> findAll() 
	{
		return daoCompte.findAll();
	}
	
	@PostMapping
	public Compte insert(@RequestBody Humain humain) 
	{
		
		return daoCompte.save(humain);
	}
	@PutMapping("/{id}")
	public Compte update( @RequestBody Compte compte) 
	{
		
		return daoCompte.save(compte);
	}
	

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoCompte.deleteById(id);
	}
}
