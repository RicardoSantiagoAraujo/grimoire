package mythik.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import mythik.dao.IDAOCompte;
import mythik.model.Admin;
import mythik.model.Compte;
import mythik.model.ConnexionRequest;
import mythik.model.Humain;
import mythik.model.IA;

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
	@PostMapping("/connexion")
	public Compte connexion(@RequestBody ConnexionRequest connexionRequest) {
		Optional<Compte> opt = daoCompte.findByLoginAndPassword(connexionRequest.getLogin(),
				connexionRequest.getPassword());

		if (opt.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		return opt.get();
	}
	
	
	
	@PostMapping("/humain")
	public Humain insert(@RequestBody Humain humain) 
	{
		
		return daoCompte.save(humain);
	}
	@PostMapping("/admin")
	public Admin insert(@RequestBody Admin admin) 
	{
		
		return daoCompte.save(admin);
	}
	@PostMapping("/ia")
	public IA insert(@RequestBody IA ia) 
	{
		
		return daoCompte.save(ia);
	}
	@PutMapping("/humain/{id}")
	public Humain update(@RequestBody Humain humain) 
	{
		
		return daoCompte.save(humain);
	}
	@PutMapping("/admin/{id}")
	public Admin update(@RequestBody Admin admin) 
	{
		
		return daoCompte.save(admin);
	}
	@PutMapping("/ia/{id}")
	public IA update(@RequestBody IA ia) 
	{
		
		return daoCompte.save(ia);
	}
	
	@PostMapping
	public Compte insert(@RequestBody Compte compte) 
	{
		
		return daoCompte.save(compte);
	}
	
	@PostMapping ("/humain")
	public Humain insertHumain(@RequestBody Humain humain) 
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
