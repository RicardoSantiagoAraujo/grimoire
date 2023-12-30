package mythik.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table
public class Combat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_combat")
	private Integer id;
	
	@Column(name="date_combat")
	private LocalDate dateCombat; 
	
	@Column(name="heure_combat")
	private LocalTime heureCombat; 
	
	@OneToMany(mappedBy = "combat")
	private List<Combattant> combattants;
	
	
	public Combat() {
		// TODO Auto-generated constructor stub
	}
	



	public Combat(Integer id, LocalDate dateCombat, LocalTime heureCombat, List<Combattant> combattants) {
		this.id = id;
		this.dateCombat = dateCombat;
		this.heureCombat = heureCombat;
		this.combattants = combattants;
	}

	public Combat(LocalDate dateCombat, LocalTime heureCombat) {
		this.dateCombat = dateCombat;
		this.heureCombat = heureCombat;
	}

	

	public Integer getId() {
		return id;
	}




	public void setId(Integer id) {
		this.id = id;
	}




	public LocalDate getDateCombat() {
		return dateCombat;
	}
	public void setDateCombat(LocalDate dateCombat) {
		this.dateCombat = dateCombat;
	}
	public LocalTime getHeureCombat() {
		return heureCombat;
	}
	public void setHeureCombat(LocalTime heureCombat) {
		this.heureCombat = heureCombat;
	}
	public List<Combattant> getCombattants() {
		return combattants;
	}
	public void setCombattants(List<Combattant> combattants) {
		this.combattants = combattants;
	} 
	
	
}
