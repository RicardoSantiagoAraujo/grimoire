package mythik.model;

public class ConnexionRequest {

	private String login; 
	private String password;
	
	public ConnexionRequest() {
		// TODO Auto-generated constructor stub
	}
	
	public ConnexionRequest(String login, String password) {
		this.login = login;
		this.password = password;
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
