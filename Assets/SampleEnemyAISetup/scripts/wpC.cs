﻿using UnityEngine;
using System.Collections;

public class wpC : MonoBehaviour {

	string[] possibleDestinations = {"wpB","wpA","wpD","wpE"};
	GameObject collidingWith;
	public string destination;

	void OnTriggerEnter(Collider collision)
	{
		collidingWith = collision.gameObject;
		do
		{int index = Random.Range (0,4);
		destination = possibleDestinations[index];}
		while (destination=="NULL");
		collidingWith.SendMessage("nextDestination",GameObject.Find (destination));
	}
}
