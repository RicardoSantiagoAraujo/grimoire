package mythik.controller.dto;

import java.util.List;

public class CombattantRequest {
	
	private List<CreatureResponse> creatures; 
	private List<CombatResponse> combats;
	private boolean gagnant;
	
	
	
	public CombattantRequest() {
		super();
	}



	public CombattantRequest(List<CreatureResponse> creatures, List<CombatResponse> combats, boolean gagnant) {
		super();
		this.creatures = creatures;
		this.combats = combats;
		this.gagnant = gagnant;
	}



	public List<CreatureResponse> getCreature() {
		return creatures;
	}



	public void setCreature(List<CreatureResponse> creatures) {
		this.creatures = creatures;
	}
	
	public void addCreature(CreatureResponse creature) {
		this.creatures.add(creature);
	}



	public List<CombatResponse> getCombats() {
		return combats;
	}



	public void setCombats(List<CombatResponse> combats) {
		this.combats = combats;
	}
	
	
	public void addCombat(CombatResponse combat) {
		this.combats.add(combat);
	}


	public boolean isGagnant() {
		return gagnant;
	}



	public void setGagnant(boolean gagnant) {
		this.gagnant = gagnant;
	}
	
	
}
