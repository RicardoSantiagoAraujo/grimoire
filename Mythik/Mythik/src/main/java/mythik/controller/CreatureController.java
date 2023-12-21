package mythik.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mythik.dao.IDAOCreature;
import mythik.model.Creature;

@RestController
@RequestMapping("/api/creature")
public class CreatureController {

	@Autowired
	IDAOCreature daoCreature; 

	@GetMapping("/{id}")
	public Creature findById(@PathVariable Integer id) 
	{
		Optional<Creature> opt = daoCreature.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		return opt.get();
	}
	
	@GetMapping
	public List<Creature> findAll() 
	{
		return daoCreature.findAll();
	}
	
	@PostMapping
	public Creature insert() 
	{
		Creature creature = new Creature("kraken", null, false, 50, 1000, null, null, null ); 
		return daoCreature.save(creature);
	}
	@PutMapping("/{id}")
	public Creature update( @RequestBody Creature creature) 
	{
		
		return daoCreature.save(creature);
	}
	

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoCreature.deleteById(id);
	}
}
