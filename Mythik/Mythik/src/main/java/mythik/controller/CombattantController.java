package mythik.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
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

import mythik.controller.dto.CombattantResponse;
import mythik.dao.IDAOCombattant;
import mythik.model.Combattant;
import mythik.model.Compte;


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
	
	@GetMapping("/statistique")
	public List<Combattant> findByCompte(Compte compte)
	{	List<Combattant> combattantsJoueur = daoCombattant.findByCompte(compte);
		
		
//		BeanUtils.copyProperties(combattantsJoueur, combattantsResponse);
		
//		for (CombattantResponse combattantResponse : combattantsResponse) {
//
//	        // Copiez les propriétés de combattant à combattantResponse
//	        combattantResponse.setCreature(mapCreatureResponse(combattant.getCreature()));
//	        combattantResponse.setCombat(mapCombatResponse(combattant.getCombat()));
//	        combattantResponse.setGagnant(combattant.isGagnant());
//
//	        // Ajoutez combattantResponse à la liste
//	        combattantsResponse.add(combattantResponse);
//		
		return combattantsJoueur;
	}
	
	
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
