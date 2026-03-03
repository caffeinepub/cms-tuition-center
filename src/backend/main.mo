import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Int "mo:core/Int";
import Nat "mo:core/Nat";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
  };

  module Inquiry {
    public func compareByTimestamp(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  let inquiriesList = Map.empty<Nat, Inquiry>();
  var inquiryCounter = 0;

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, message : Text, timestamp : Int) : async () {
    if (name == "" or phone == "" or message == "") {
      Runtime.trap("All fields must be filled out. ");
    };

    let newInquiry : Inquiry = {
      name;
      phone;
      message;
      timestamp;
    };

    inquiriesList.add(inquiryCounter, newInquiry);
    inquiryCounter += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiriesList.values().toArray().sort(Inquiry.compareByTimestamp);
  };
};
