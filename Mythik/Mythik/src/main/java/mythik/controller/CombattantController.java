package mythik.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mythik.controller.dto.CombattantRequest;
import mythik.dao.IDAOCombattant;
import mythik.model.Combattant;
import quest.controller.dto.FiliereRequest;
import quest.model.Filiere;
import quest.model.Stagiaire;


@RestController
@RequestMapping("/api/combattant")
@CrossOrigin("*")
public class CombattantController {

	@Autowired
	IDAOCombattant daoCombattant; 

	@GetMapping("/{id}")
	public Combattant findById(@PathVariable Integer id) 
	{
		Optional<Combattant> opt = daoCombattant.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		return opt.get();
	}
	
	@GetMapping
	public List<Combattant> findAll() 
	{
		return daoCombattant.findAll();
	}
	
	@PostMapping
	public Combattant insert(@RequestBody Combattant combattant) 
	{
		
		return daoCombattant.save(combattant);
	}
	
//	@PostMapping("/statistiques")
//	@Transactional
//	public Combattant insertWithCombat(@RequestBody CombattantRequest combattantRequest) 
//	{
//		Combattant combattant = new Combattant();
//		
//		BeanUtils.copyProperties(combattantRequest, combattant);
//		
//		combattant = daoCombattant.save(combattant);
//		
//		for(String email : combattantRequest.getEleves()) {
//			Stagiaire stagiaire = daoStagiaire.findByEmail(email);
//			stagiaire.setFiliere(filiere);
//			
//			stagiaire = daoStagiaire.save(stagiaire);
//		}
//		
//		em.refresh(filiere);
//		
//		return filiere;
//	}
	
	@PutMapping("/{id}")
	public Combattant update( @RequestBody Combattant combattant) 
	{
		
		return daoCombattant.save(combattant);
	}
	

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoCombattant.deleteById(id);
	}
}
