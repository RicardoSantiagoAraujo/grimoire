package mythik.model;

import com.fasterxml.jackson.annotation.JsonTypeName;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("Admin")
@JsonTypeName("admin")
public class Admin extends Compte {

	public Admin() {
		super();
		
	}

	
	
}
