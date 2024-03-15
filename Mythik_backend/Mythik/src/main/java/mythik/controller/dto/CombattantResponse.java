package mythik.controller.dto;

import java.util.List;


public class CombattantResponse {
	
	private CreatureResponse creature; 
	private CombatResponse combat;
	private boolean gagnant;
	
	
	
	public CombattantResponse() {
		super();
	}

	public CombattantResponse(CreatureResponse creature, CombatResponse combat, boolean gagnant) {
		super();
		this.creature = creature;
		this.combat = combat;
		this.gagnant = gagnant;
	}


	public CreatureResponse getCreature() {
		return creature;
	}

	public void setCreature(CreatureResponse creature) {
		this.creature = creature;
	}

	public CombatResponse getCombat() {
		return combat;
	}

	public void setCombat(CombatResponse combat) {
		this.combat = combat;
	}

	public boolean isGagnant() {
		return gagnant;
	}

	public void setGagnant(boolean gagnant) {
		this.gagnant = gagnant;
	}
	
	
}
