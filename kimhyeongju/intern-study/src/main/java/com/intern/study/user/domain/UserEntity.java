package com.intern.study.user.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@Table(name = "p_user")
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String        userId;
	private String        password;
	private String        username;
	private String        email;
	private String        phone;
	private String        role;
	private Boolean       isActive;
	private LocalDateTime regDate;

	@Builder
	private UserEntity(
			String        userId,
			String        password,
			String        username,
			String        email,
			String        phone,
			String        role,
			Boolean       isActive,
			LocalDateTime regDate
	) {
		this.userId   = userId;
		this.password = password;
		this.username = username;
		this.email    = email;
		this.phone    = phone;
		this.role     = role;
		this.isActive = isActive;
		this.regDate  = regDate;
	}
}
