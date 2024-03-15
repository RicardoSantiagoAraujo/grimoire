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

import mythik.dao.IDAOCombat;
import mythik.model.Combat;

@RestController
@RequestMapping("/api/combat")
@CrossOrigin("*")
public class CombatController {

	@Autowired
	IDAOCombat daoCombat; 

	@GetMapping("/{id}")
	public Combat findById(@PathVariable Integer id) 
	{
		Optional<Combat> opt = daoCombat.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		return opt.get();
	}
	
	@GetMapping
	public List<Combat> findAll() 
	{
		return daoCombat.findAll();
	}
	
	@PostMapping
	public Combat insert(@RequestBody Combat combat) 
	{
		
		return daoCombat.save(combat);
	}
	@PutMapping("/{id}")
	public Combat update( @RequestBody Combat combat) 
	{
		
		return daoCombat.save(combat);
	}
	

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoCombat.deleteById(id);
	}
}
