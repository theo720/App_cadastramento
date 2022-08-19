package com.appCadastramento.api.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.appCadastramento.api.Models.Clientes;
@Repository
public interface repository_ extends CrudRepository<Clientes, Long>{  

	@Query(value = "SELECT * FROM CLIENTES ORDER BY dt_criado desc", nativeQuery = true)
	public List<Clientes> findByOrderByDt_criadoDesc();
	@Query(value = "DELETE FROM CLIENTES c WHERE c.idade=:idade", nativeQuery = true)
	void deleteByidade(String idade);
	@Query(value = "SELECT * FROM CLIENTES c WHERE c.nome LIKE ?1", nativeQuery = true)
	 List<Clientes> findbynome(String nome);
	
}
