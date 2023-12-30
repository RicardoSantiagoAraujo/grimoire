package mythik.model;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;


@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
    @JsonSubTypes.Type(value = Admin.class, name = "admin"),
   
    @JsonSubTypes.Type(value = Humain.class, name = "humain"),
    @JsonSubTypes.Type(value = IA.class, name = "ia")
})
@Entity
@Table
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="type_joueur",columnDefinition = "ENUM('Humain','IA','Admin')")
public abstract class Compte {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_compte")
	private Integer id;
	protected String login; 
	protected String password; 
	protected String email; 
	
	
	public Compte() {
		// TODO Auto-generated constructor stub
	}
	
	

	



	public Compte(Integer id, String login, String password, String email) {
		this.id = id;
		this.login = login;
		this.password = password;
		this.email = email;
	}







	public Compte(String login, String password, String email) {
		this.login = login;
		this.password = password;
		this.email = email;
	}







	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}







	public String getEmail() {
		return email;
	}







	public void setEmail(String email) {
		this.email = email;
	}
	
}
