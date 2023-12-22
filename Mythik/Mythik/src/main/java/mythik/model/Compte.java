package mythik.model;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;

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
	
	public Compte() {
		// TODO Auto-generated constructor stub
	}
	
	

	

	public Compte(Integer id, String login, String password, String email) {
		super();
		this.id = id;
		this.login = login;
		this.password = password;
	}



	public Compte(String login, String password) {
		this.login = login;
		this.password = password;
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
	
}
