// SubscribersList.js

import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import './styles/backstyles/backeoffice.css';

function SubscribersList() {
  const [subscribers, setSubscribers] = useState([]);
  const firestore = getFirestore();

  useEffect(() => {
    const fetchSubscribers = async () => {
      const subscribersSnapshot = await getDocs(collection(firestore, "newsletterSubscribers"));
      const subscribersData = subscribersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSubscribers(subscribersData);
    };

    fetchSubscribers();
  }, [firestore]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestore, 'newsletterSubscribers', id));
      setSubscribers(subscribers.filter(subscriber => subscriber.id !== id));
      console.log('Abonné supprimé avec succès !');
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'abonné :', error);
    }
  };

  return (
    <div className="container">
      <h1>Liste des abonnés à la newsletter</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber.id}>
              <td>{subscriber.name}</td>
              <td>{subscriber.email}</td>
              <td><button onClick={() => handleDelete(subscriber.id)}>Supprimer</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubscribersList;
